.PHONY: up down test live-test build clean-docker

up:
	docker-compose up -d && docker-compose logs -f react-fetchify

test:
	docker-compose run --rm react-fetchify npm run test

live-test:
	docker-compose run --rm react-fetchify npm run live-test

down:
	docker-compose stop

clean-docker:
	docker system prune --all --volumes

build:
	cd fetchify && npm run build