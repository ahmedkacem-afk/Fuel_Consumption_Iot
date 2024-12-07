# Use an official Python image as the base image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire FastAPI app code into the working directory
COPY . .

# Expose the port FastAPI will run on
EXPOSE 5000

# Command to run the FastAPI application
CMD ["fastapi", "dev", "main.py"]
