from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, FileResponse

app = FastAPI()


@app.get("/")
async def read_root(request: Request):
    with open("templates/index.html", "r") as f:
        html = f.read()
    return HTMLResponse(html)


@app.get("/static/{filename}", response_class=FileResponse)
async def read_static_file(filename: str):
    file_path = f"static/{filename}"
    return FileResponse(path=file_path)
