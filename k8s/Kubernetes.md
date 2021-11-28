Source: https://youtu.be/X48VuDVv0do
Continue: https://youtu.be/X48VuDVv0do?t=6377


## Main components
Node
    Contains pods
    if a pod dies, create a new one, with a new IP address

Pod

Smallest unit. Meant to run 1 application container. 
Abstraction over container.
A pod contains a container.

A pod gets a virtual (internal) IP address.


Service: 
    a permament IP address for each pod. Do not forget, if the pod dies, and k8 starts a new one, it will have a new IP address
    !the lifecycle of a pod and service not connected

External service: 
    opens a communication to an internal service with the pods IP address


Ingress
    extra layer to be able to access the services. So that we don't have to access them by the pods IP address

ConfigMap
    external configuration of your application (like when a db instance IP changes, it is easier to reach instead of rebuilding a websites pod)

Secret
    just like configmap but used to store secret data in base64 encoded format
    !the built-in mechanism is not enabled by default
    use secrets by using environment variables or as properties files

Volume: 
    Data storage
        Goal: if the pod restarts, we shouldn't loose data
        Concept: Volumes: storage on local machine OR remote, outside of the k8s cluster

    !K8s doesn't manage data persistence

The idea of k8s is to replicate everything.
For example, there are two nodes. the same pods belongs to the same service with a permanent IP address. So that the service acts as a load balancer

Deployment
    Blueprint for the pods
    you don't deploy pods one-by-one. you create deployments
    abstraction of pods

StatefulSet
    !Db can't be replicated via deployment (as they have state). We need a mechanism to decide which pod is a writer and which one a reader replica

    it is for stateful apps (like mysql, mongodb, elasticseearch)

## K8s architecture

Worker server == node
Each node has multiple Pods on it
3 processed must be installed on every node:
    - container runtime (tipically docker)
    - Kubelet interacts with both the container and the node. It starts the pod inside the node
    - Kube proxy forwards the requests

How do you interact with a cluster (cluster: multiple nodes)
Answer: master processes (master nodes)
    - API server: the client interacts with the API server
        - it is a cluster gateway
        - gatekeeper for authentication
        - 
        the external request arrives to the API server. It validates the requests, runs other processes and forwards it to a pod.

        You can reach the API server by using
            - API
            - UI
            - CTL (kubectl)
    - Scheduler
        - On a pod creating, it decides which Pod should handle the request.
    - Controller manager
        - Detects cluster change changes (like when a pod dies) and requests the scheduler 
    - etcd: the cluster brain. Cluster changes get stored in a key-value storage 

!Of course, the master nodes are replicated as well
Sample cluster: 2 master nodes, 3 worker nodes. 

## Minicube

To test something on a local machine
It is a one-node cluster that has multiple master processes and runs on one node. 
It creates a virtual box on your machine. It is a 1 node K8s cluster for testing purposes.
`minikube start` 
`minikube status`

## kubectl

A CLI tool to manage K8s clusters. It communicates with the API Server

`kubectl get pods`
`kubectl version`
`kubectl get nodes` - gets the status of the nodes
`kubectl get pod`
`kubectl get services`

`kubectl create` - you can create all components - but not pods. Usually we work with deployments, not pods
`kubectl create deployment NAME --image=image`

Create an nginx deployment:
`kubectl create deployment nginx-depl --image=nginx`
`kubectl get deployment` - get the status of the deployment
`kubectl get pod` - gets the status of the pod
`kubectl get pod -o wide` - with the IP addresses
`kubectl get replicaset` - you can check the ids of a deployment, pod and replicaset and you'll understand
`kubectl edit deployment nginx-depl` - edit deployment. Note: when we edit a deployment, k8s automatically stopes the old pod and creates a new one with the new deployment configuration.

create a database:
`kubectl create depolyment mongo-depl --image=mongo` 
`kubectl get pod` - description AND event log 
`kubectl logs mongo-depl-5fd6b7d4b4-bbjps` - get log output

`kubectl exec -it mongo-depl-5fd6b7d4b4-bbjps -- bin/bash` runs integrated terminal on a pod. 
Note: `-it` means integrated terminal

Every operation runs on a deployment level. To check that:
- `kubectl get deployment` to list deployments
- `kubectl delete deployment mongo-depl` to delete a deployment
- `kubectl get deployment` to check if the deployment has been deleted
- `kubectl get replicaset` you can see, the replicaset is automatically deleted as well - as the operations are running on deployment level.

`kubectl apply -f config-file.yaml` - you can pre-configure a deployment so that you don't have to keeep long deployment comments.

`kubectl get all`  -- really all

## kubernetes configuration
- third component: status. It contains the actual state. Spec contains the desired state. stored in etcd
- best practise: store the config file within our code (Infrastructure as a service)

    - template: blueprint for the pod

- medatada: labels
- spec: selectors

- ports: 
    port: the port of the service
    targetPort: the port of the pod

`kubectl describe service nginx-service`


Let's get the third part of the configuration file:
`kubectl get deployment nginx-deployment -o yaml`
(useful for debugging)

## Practise: create a mongo db
Goal: deploy mongo db and mongo express
- create a mongodb pod
    - go internal service
- mongo express deployment to connect to db
- credentials with env. variables
- configmap: db url
- secret: db user/password
- external service to talk with the mongo express pod

Request: Browser -> Mongo Express external service -> mongo express -> mongo db internal service -> mongodb pod




Tips:
    - generate base64: `echo -n 'username' | base64`
    - minikube doesn't open an external IP automatically. Run `minikube service mongo-express-service`

## Namespaces

With namespaces, you can
    - add access limits 
    - add resource limits
    - you can separate code like by teams or by environments
    - services can be shared between services

Limitations:
    - configmaps and secrets cannot be shared between services
    - some compnents cannot be created within a namespace:
        - volumes
        - nodes
    


`kubectl get namespace`
    - kube-system: system processes
    - kube-public: publicly accessible data
    - kube-node-lease: heartbeats of nodes
    - default: default namespace for your resources

`kubectl create namespace my-namespace` - create namespace
`kubectl delete namespace my-namespace` - delet namespace

Or we can do it with configuration files (ofc)

`kubectl get configmap -n default` - get config maps in a namespace

`kubectl apply -f mysql-configmap.yaml --namespace=my-namespace` - creates a configmap in a namespace

Or you can specify it in a config map: `metadata-> namespace: my-namespace`
