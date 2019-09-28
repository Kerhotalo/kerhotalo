#!/bin/bash
echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
docker push kerhotalo/frontend
docker push kerhotalo/backend