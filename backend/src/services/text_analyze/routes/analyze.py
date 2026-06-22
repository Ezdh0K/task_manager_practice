from fastapi import APIRouter
from schemas.task_schema import TaskRequest
from services.analyzer import analyze_task

router = APIRouter()

@router.post("/analyze")
def analyze(task: TaskRequest):
    return analyze_task(task.text)