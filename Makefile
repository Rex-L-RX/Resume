#!/usr/bin/env make

.PHONY: install
install:
	@npm install
	
.PHONY: build
build: install
	@npm run build

.PHONY: start
start:
	@npm start

.PHONY: deploy
deploy: install build
	@npm run deploy

.PHONY: clean
clean:
	@rm -rf node_modules build
