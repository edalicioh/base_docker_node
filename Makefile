include .env

.PHONY: up
.PHONY: psql
.PHONY: logs
.PHONY: down


.PHONY:  up-dev
.PHONY:  psql-dev
.PHONY:  logs-dev
.PHONY:  down-dev

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f
	
psql:
	docker exec -it postgres_$(APP_NAME)  psql -U $(DB_USERNAME) -d $(DB_DATABASE)	



up-dev:
	docker-compose -f docker-compose.dev.yml up -d

down-dev:
	docker-compose -f docker-compose.dev.yml down

logs-dev:
	docker-compose -f docker-compose.dev.yml logs 

psql-dev:
	docker exec -it postgres_$(APP_NAME)_dev  psql -U $(DB_USERNAME) -d $(DB_DATABASE)	
