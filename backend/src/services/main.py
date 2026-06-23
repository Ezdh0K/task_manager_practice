from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from export_in_csv.export_routes import router as export_router
from text_analyze.routes.analyze import router as analyze_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(export_router) 
app.include_router(analyze_router) 