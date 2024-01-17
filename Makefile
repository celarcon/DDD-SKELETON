.phony: build

start:
	- docker compose up $(ARGS)

start-frontend:
	- make start ARGS=frontend

start-backend:
	- make start ARGS=backend

test-frontend:
	- docker compose run --rm frontend npm run test:frontend $(ARGS)

test-backend:
	- make e2e-test-backend
	- make unit-test-backend

unit-test-backend:
	- docker compose run --rm backend npm run test:backend:unit $(ARGS)

e2e-test-backend:
	- docker compose run --rm backend npm run test:backend:e2e $(ARGS)

unit-test-all:
	- make unit-test-backend

e2e-test-all:
	- make e2e-test-backend
	
test-all:
	- make test-frontend
	- make e2e-test-backend
	- make unit-test-backend

stop:
	- docker compose down

install-dependencies-local:
	- npm install ./app/frontend/ --prefix ./app/frontend/
	- npm install ./app/backend/ --prefix ./app/backend/