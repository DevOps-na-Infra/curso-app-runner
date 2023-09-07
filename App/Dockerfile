FROM ubuntu:22.04

# Variaveis de S.O.
ENV DEBIAN_FRONTEND=noninteractive

# Atualizando S.O
RUN apt-get update
RUN apt-get upgrade -y

# Instalando Apache
RUN apt-get install apache2 -y

# Iniciando Apache
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

