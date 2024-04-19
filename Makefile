#!make

help: _header
	${info }
	@echo Opciones:
	@echo ----------------------
	@echo build / install
	@echo start / stop / restart
	@echo workspace
	@echo clean
	@echo ----------------------

_header:
	@echo ---
	@echo Vue
	@echo ---

_urls:
	${info }
	@echo ---------------------------
	@echo [Vue] http://localhost:5173
	@echo ---------------------------

build:
	@docker compose build --pull

install:
	@docker compose run --rm vue npm install

_start-command:
	@docker compose up -d

start: _start-command _urls

stop:
	@docker compose stop

restart: stop start

workspace:
	@docker compose run --rm vue /bin/bash

clean:
	@docker compose down -v --remove-orphans
