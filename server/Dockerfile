FROM python:3.12.1-slim-bullseye

WORKDIR /

RUN apt-get update

COPY /src /backend/
COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt;

CMD ["python", "/backend/manage.py", "runserver", "0.0.0.0:8000"]