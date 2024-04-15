#!make

help: _header
	${info }
	@echo Opciones:
	@echo ----------------------------------------
	@echo build
	@echo start
	@echo workspace
	@echo clean
	@echo ----------------------------------------

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

_start-command:
	@docker compose up -d

start: _start-command _urls

workspace:
	@docker compose exec vue /bin/bash

clean:
	@docker compose down -v --remove-orphans
