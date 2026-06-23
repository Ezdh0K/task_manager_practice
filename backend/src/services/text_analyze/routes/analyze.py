from fastapi import APIRouter
from text_analyze.schemas.task_schema import TaskRequest
from text_analyze.services.analyzer import analyze_task

router = APIRouter()

@router.post("/analyze")
def analyze(task: TaskRequest):
    return analyze_task(task.text)