# Build Stage 1: Compiling Golang Binary
FROM golang:1.21-alpine AS builder

WORKDIR /app

# Install git for resolving go modules
RUN apk add --no-cache git

# Copy go mod and dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the entire backend codebase
COPY . .

# Build the final binary (Disable CGO to ensure it statically links and works natively inside the Alpine image)
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o main .

# Build Stage 2: Extremely Lightweight Deployment Server (Alpine)
FROM alpine:latest

WORKDIR /app

# Add timezone data and CA certificates for making secure outbound requests (if needed)
RUN apk --no-cache add ca-certificates tzdata

# Copy the generated `.env` file and binary from the previous builder stage
COPY --from=builder /app/main .
# Assuming .env exists locally and should be copied over. If not, map it from docker-compose instead.
# COPY .env . 

# Fiber operates on Port 8082 internally
EXPOSE 8082

CMD ["./main"]
