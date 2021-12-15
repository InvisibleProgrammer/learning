# Steps to run it in minikube: 

## Add local docker variables into minikube

Firstly, list the necessary settings for minikube to be able to reach local docker repository: `minikube docker-env`

The output will be something like 
```
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://192.168.49.2:2376"
export DOCKER_CERT_PATH="/home/morzel/.minikube/certs"
export MINIKUBE_ACTIVE_DOCKERD="minikube"

# To point your shell to minikube's docker-daemon, run:
# eval $(minikube -p minikube docker-env)
```

Run the recommended command: `eval $(minikube -p minikube docker-env)`

## Build the local image

Build the local image: `docker build . -t todo-api/latest`
Note: please do not forget to build it in the same folder as where the `Dockerfile` is being stored.

## Apply configuration

Run `kubectl apply -f api-service-deployment.yaml`

And check the result: `kubectl get all`
The thing that you are looking for is: 
```
deployment.apps/todo-api-deployment   1/1     1            1           15m
```

## Generate deployment file

Run `kubectl create deployment todo-api --image=todo-api/latest --dry-run=none -o=yaml C` and delete the uneccessary parts
The output will be something like this:

```
kubectl create deployment todo-api --image=todo-api/latest --dry-run=none -o=yaml 
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: "2021-12-15T09:16:52Z"
  generation: 1
  labels:
    app: todo-api
  name: todo-api
  namespace: default
  resourceVersion: "41577"
  uid: 9bea5fec-65a2-4873-805f-607eccfe0c54
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: todo-api
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: todo-api
    spec:
      containers:
      - image: todo-api/latest
        imagePullPolicy: Always
        name: latest
        resources: {}
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext: {}
      terminationGracePeriodSeconds: 30
status: {}
```

After some clean up, the deployment configuration file will looks something like this: 
```
apiVersion: batch/v1
kind: Job
metadata:
  name: todo-api
spec:
  template:
    metadata:
      name: todo-api-pod
    spec:
      containers:
      - name: todo-api
        image: todo-api/latest
        imagePullPolicy: Never
      restartPolicy: Never
```

## Validate the service is running

Now let's validate if the service is running. Note, the network is still closed to the pod so we have to open a shell into the pod and check if the service is running properly on it's health check endpoint:

Get the pods: `kubectl get all`
Cherry pick a pod. In my case that's will be `todo-api-8465bc7c9d-9cjgz`
Open a terminal on that pod: `kubectl exec --stdin --tty pod/todo-api-8465bc7c9d-9cjgz -- /bin/bash`

Check if the files are here: 
```
root@todo-api-8465bc7c9d-9cjgz:/app# ls
go.mod  go.sum  main.go
```

Call the health check endpoint: 
```
root@todo-api-8465bc7c9d-9cjgz:/app# curl http://localhost:8080/diag/health
{
    "Service": true,
    "Database": false
}root@todo-api-8465bc7c9d-9cjgz:/app# 
```

Now, as whe have successfully validated, exit from the pod:
```
root@todo-api-8465bc7c9d-9cjgz:/app# exit
exit
morzel@desktop:~/work/learning/go/todo-api$ 
```
