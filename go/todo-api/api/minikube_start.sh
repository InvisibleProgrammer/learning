#!/bin/bash

echo "================ Start minikube ================"
minikube start

echo "================ Set up environment variables for docker ================"
echo "================ Note: it is only for the current terminal ================"
eval $(minikube -p minikube docker-env)
