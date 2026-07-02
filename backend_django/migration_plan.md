# Migration Plan: Node.js to Django REST Framework

## Objective
Migrate the existing Express/Mongoose backend to Python Django with Django REST Framework (DRF).

## Phase 1: Environment Setup
1.  **Initialize Python Environment**
    - Create a virtual environment: `python -m venv venv`
    - Activate virtual environment.
    - Install dependencies: `pip install django djangorestframework django-cors-headers`.
    - Create `requirements.txt`.

2.  **Initialize Django Project**
    - Create project: `django-admin startproject backend_django .` (in `backend` dir or new `backend_py` dir? -> User said "backend", better to keep separate or rename old. I will create `backend_new` and then swap, or just `backend_django`).
    - *Decision*: Create `backend_django` directory to avoid messing up existing one until confirmed.

## Phase 2: App Structure & Models
Create apps mirroring the logical separation:

### App: `core`
- Settings, common utilities.

### App: `projects`
- **Models**:
    - `Project` (Simple)
    - `DetailedProject` (Complex, use JSONField for nested parts or related models)
    - `ConstructionProject`
    - `PortfolioProject`
- **Serializers**: Create `ModelSerializer` for each.
- **Views**: `ModelViewSet` for each.

### App: `services`
- **Models**: `Service`, `NewService`
- **Serializers** & **Views**.

### App: `contact`
- **Models**: `Inquiry`, `AdminInquiry`
- **Serializers** & **Views**.

### App: `company`
- **Models**: `CompanyInfo`
- **Serializers** & **Views**.

## Phase 3: Configuration
- Configure `settings.py`:
    - `INSTALLED_APPS` (add apps + `rest_framework`, `corsheaders`)
    - `DATABASES` (Use SQLite for default)
    - `CORS_ORIGIN_ALLOW_ALL = True` (for dev)
- Configure `urls.py`:
    - Use `DefaultRouter` to register viewsets.

## Phase 4: Implementation Steps
1.  Setup Django Project & Apps.
2.  Implement `projects` app (Models -> Serializers -> Views -> URLs).
3.  Implement `services` app.
4.  Implement `contact` app.
5.  Implement `company` app.
6.  Migrate data (Optional/Later - just structure for now).
7.  Verify endpoints.

## Notes on Model Conversion
- `String` -> `models.CharField` / `models.TextField`
- `Number` -> `models.IntegerField` / `models.FloatField` / `models.DecimalField`
- `Date` -> `models.DateTimeField`
- `Boolean` -> `models.BooleanField`
- `Array` / Nested Objects -> `models.JSONField` (Requires SQLite with JSON1 extension, usually enabled, or PostgreSQL).
    - *Alternative*: Create related models for OneToMany. For this migration, I will use `models.JSONField` for purely nested data (like `coordinates`, `location`) and simpler fields for flattened data where appropriate.

## Execution Order
1.  Create `backend_django` folder.
2.  Install Django & Init Project.
3.  Create Apps.
4.  Write Code.
