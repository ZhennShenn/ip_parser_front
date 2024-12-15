# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /front

# Копируем файлы проекта
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для обслуживания статических файлов
FROM nginx:alpine
COPY --from=0 /front/build /usr/share/nginx/html

# Открываем порт
EXPOSE 80

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]