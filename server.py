from fastapi import FastAPI
from auth.routes import authRouter
from config import engine
from db.models import Base
from sys_admin.routes import sys_admin_router

app = FastAPI()


app.include_router(authRouter, prefix="/api/auth")
app.include_router(sys_admin_router, prefix="/api/sys_admin")


@app.get("/")
async def root():
    return {"message": "Hello World"}
