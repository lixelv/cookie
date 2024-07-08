import aiofiles

from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/")
async def read_root(request: Request):
    async with aiofiles.open("static/index.html", mode="r", encoding="utf-8") as f:
        html = await f.read()
    return HTMLResponse(html)
