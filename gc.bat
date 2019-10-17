@if %1%=="" goto erro
@git add .
@git commit -m "%1%"
goto fim

:erro
@echo.
@echo Digite a mensagem de commit
@echo.

:fim