# How to run

- build the docker image: `docker build . -t go-app-docker-image/latest`
- deploy to minikube: `kubectl apply -f deployment.yaml`
- expose the port: `kubectl expose deployment my-go-app --type=NodePort --name=go-app-svc --target-port=3000`
- get the service url: `minikube service go-app-svc --url`

