#!/bin/bash


echo "============ Delete service ============"
kubectl delete service todo-api-svc

echo "============ Delete deployment ============"
kubectl delete deployment todo-api
