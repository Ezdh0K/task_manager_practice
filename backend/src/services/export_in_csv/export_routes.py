from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import FileResponse
from .csv_export import save_in_file

router = APIRouter()

@router.get("/export")
def export(request: Request):
    try:
        auth_header = request.headers.get("Authorization")  # 👈
        file_path = save_in_file(auth_header)
        if not file_path:
            raise HTTPException(status_code=404, detail="Нет задач для экспорта")

        return FileResponse(
            path=file_path,
            filename="tasks.csv",
            media_type='text/csv',
            headers={"Content-Disposition": "attachment; filename=tasks.csv"}
        )
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))