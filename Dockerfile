FROM php:8.2-apache

# Cài thêm các thư viện cần thiết và key repo của Microsoft
RUN apt-get update && apt-get install -y \
    gnupg2 curl apt-transport-https lsb-release ca-certificates software-properties-common \
    && curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/11/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update && ACCEPT_EULA=Y apt-get install -y msodbcsql17 unixodbc-dev \
    && apt-get install -y unzip git zip libpng-dev libonig-dev libxml2-dev libzip-dev libjpeg-dev libfreetype6-dev gcc g++ make autoconf libc-dev pkg-config \
    && pecl install pdo_sqlsrv \
    && docker-php-ext-enable pdo_sqlsrv \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo mbstring bcmath zip

# Cài composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Laravel project
WORKDIR /var/www/html
COPY . .

# Cho phép Git truy cập Laravel folder
RUN git config --global --add safe.directory /var/www/html

# Cài Laravel package
RUN composer install --no-interaction --prefer-dist

# Enable Apache rewrite
RUN a2enmod rewrite

# Trỏ Apache vào thư mục public/
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Cấp quyền
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html/storage /var/www/html/bootstrap/cache

