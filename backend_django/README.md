# Django Backend for FrameFlow

This is the Python/Django migration of the backend service.

## Prerequisites
- Python 3.10+
- Virtual environment (recommended)

## Setup

1.  Navigate to `backend_django`.
2.  Create virtual environment:
    ```bash
    python -m venv venv
    ```
3.  Activate virtual environment:
    - Windows: `venv\Scripts\activate`
    - Linux/Mac: `source venv/bin/activate`
4.  Install dependencies:
    ```bash
    pip install django djangorestframework django-cors-headers
    ```
5.  Run migrations:
    ```bash
    python manage.py migrate
    ```
6.  Start server:
    ```bash
    python manage.py runserver
    ```

## Endpoints
The API is available at `http://localhost:8000/api/`.

- `/api/projects/`
- `/api/detailed-projects/`
- `/api/construction-projects/`
- `/api/portfolio-projects/`
- `/api/services/`
- `/api/new-services/`
- `/api/contact/`
- `/api/admin-contact/`
- `/api/company/`
