APP_NAME = prismix
CONTAINER_NAME = riipandi/prismix
PACKAGE_VERSION = 0.1.0

.PHONY: clean inspect

clean:
	rm -rf ./node_modules ./build ./out

inspect:
	if [ -d "./node_modules" ]; then du -sh ./node_modules/* | sort -nr | grep '\dM.*' ; fi

# ------------------------------------------------------------------------------
# Docker container scripts
# ------------------------------------------------------------------------------

docker.network:
	docker network inspect intranet >/dev/null 2>&1 || \
	docker network create -d bridge intranet

docker.build:
	DOCKER_BUILDKIT=1 docker build \
		-t $(CONTAINER_NAME):latest \
		-t $(CONTAINER_NAME):$(PACKAGE_VERSION) .

docker.push:
	docker image push $(CONTAINER_NAME):latest
	docker image push $(CONTAINER_NAME):$(PACKAGE_VERSION)

docker.run: docker.network
	docker run --rm -d -p 3080:3080 \
		--network intranet \
		--name $(APP_NAME) \
		--env-file $(PWD)/.env \
		 $(CONTAINER_NAME):latest

docker.stop:
	docker stop $(APP_NAME)

docker.restart: docker.stop docker.run

docker.logs:
	docker logs -f $(APP_NAME)

docker.shell:
	docker exec -it $(APP_NAME) /bin/sh

# ------------------------------------------------------------------------------
# Deployment scripts
# ------------------------------------------------------------------------------

fly.production:
	fly deploy -c $(PWD)/fly.toml

fly.console.production:
	fly ssh -c $(PWD)/fly.toml console
