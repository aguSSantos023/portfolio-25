# ETAPA 1: Construcción (Build)
FROM oven/bun:1 AS builder
WORKDIR /app


COPY package.json bun.lock* ./

# Instalamos dependencias
RUN bun install

COPY . .

# Construimos la app
RUN bun run build

# ETAPA 2: Servidor Web (Nginx)
FROM nginx:alpine

# 1. Copiamos el build
COPY --from=builder /app/dist/portfolio-25/browser /usr/share/nginx/html

# 2. Copiamos TU configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
