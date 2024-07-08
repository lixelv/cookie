import aiofiles

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse

app = FastAPI()


@app.get("/")
async def read_root(request: Request):
    async with aiofiles.open("templates/index.html", mode="r", encoding="utf-8") as f:
        html = await f.read()
    return HTMLResponse(html)


@app.get("/static/{filename}", response_class=FileResponse)
async def read_static_file(filename: str):
    file_path = f"static/{filename}"
    return FileResponse(path=file_path)
