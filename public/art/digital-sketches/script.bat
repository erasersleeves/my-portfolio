@echo off
setlocal enabledelayedexpansion
set count=101

for %%f in (*.jpg) do (
    set "number=!count:~1!"
    ren "%%f" "!number!.jpg"
    set /a count+=1
)

echo Done!
pause