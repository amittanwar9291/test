FROM vault

COPY vault/steps.sh /vault-config/steps.sh
COPY vault/vault.hcl /vault-config/vault.hcl
COPY vault/tls/ /vault-config/tls
COPY vault/keys/public.key /vault-config/public.key

USER root

RUN apk add --update gnupg

RUN /bin/sh -c "chown --recursive vault:vault /vault-config/"
RUN /bin/sh -c "chmod -R 777 /vault-config/"
#RUN /bin/sh -c "chmod -R 777 /vault-storage/"
ENTRYPOINT ["/vault-config/steps.sh"]
