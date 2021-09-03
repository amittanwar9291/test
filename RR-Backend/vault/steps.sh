#!/bin/sh
export KEY_LOCATION=/vault-storage/
export CONFIG_LOCATION=/vault-config/
export VAULT_ADDR="http://localhost:8200"
unset INIT

cd $CONFIG_LOCATION
vault server -config vault.hcl &
sleep 15

# Check if already initialized, if not, initialize and save keys
if [ ! -f "${KEY_LOCATION}unseal_keys" ]; then
    export INIT=true
    echo "Initializing Vault"
    vault operator init  > ${KEY_LOCATION}init-output
    #cat ${KEY_LOCATION}init-output
    cat ${KEY_LOCATION}init-output | grep "Unseal Key" | cut -c15- > ${KEY_LOCATION}unseal_keys
    cat ${KEY_LOCATION}init-output | grep "Root" | cut -c21- > ${KEY_LOCATION}root_key
    cat ${KEY_LOCATION}unseal_keys
    #cat ${KEY_LOCATION}root_key
    sed -i -e 1's/.*/UNSEAL_1=&/' ${KEY_LOCATION}unseal_keys
    sed -i -e 2's/.*/UNSEAL_2=&/' ${KEY_LOCATION}unseal_keys
    sed -i -e 3's/.*/UNSEAL_3=&/' ${KEY_LOCATION}unseal_keys
    sed -i -e 4's/.*/UNSEAL_4=&/' ${KEY_LOCATION}unseal_keys
    sed -i -e 5's/.*/UNSEAL_5=&/' ${KEY_LOCATION}unseal_keys
    sed -i -e 1's/.*/ROOT_TOKEN=&/' ${KEY_LOCATION}root_key

    . ${KEY_LOCATION}root_key
    # Encrypting root key
    echo "Encryting root key"
    gpg --batch --import public.key
    gpg --batch --output /vault-storage/root_key_encrypted --recipient alpay.yilmaz@neo-q.de --trust-model always --encrypt ${KEY_LOCATION}root_key
    rm ${KEY_LOCATION}root_key
    echo "Rootkey --- \n"
    cat /vault-storage/root_key_encrypted
    echo "\n --- End Rootkey"
fi

. ${KEY_LOCATION}unseal_keys
echo "Unsealing Vault"
vault operator unseal  $UNSEAL_1
vault operator unseal  $UNSEAL_2
vault operator unseal  $UNSEAL_3

if [ ! -z "$INIT" ]; then
    echo "Configuring Vault"
    vault login  $ROOT_TOKEN

    echo "Enable and configure Transit"
    vault secrets enable  transit
    vault write  -f transit/keys/rr
    vault policy write  app-rr -<<EOF
    path "transit/encrypt/rr" {
       capabilities = [ "update" ]
    }
    path "transit/decrypt/rr" {
       capabilities = [ "update" ]
    }
    # To list the available secrets engines
    path "sys/mounts" {
      capabilities = [ "read" ]
    }

    # Write and manage secrets in key/value secrets engine
    path "kv-v1/*" {
      capabilities = [ "create", "read", "update", "delete", "list" ]
    }
EOF


    echo "Enable and configure LDAP"
    vault auth enable ldap
    vault secrets enable -path="kv-v1" kv

    vault write  auth/ldap/config \
        url="ldap://rr-teleport.westeurope.cloudapp.azure.com/" \
        userattr="uid" \
        userdn="ou=OnPremise,dc=example,dc=org" \
        groupdn="ou=OnPremise,dc=example,dc=org" \
        groupfilter="" \
        groupattr="cn" \
        token_policies="app-rr"


    unset ROOT_TOKEN
fi

printenv

echo "Done Configuring"
tail -f /dev/null
