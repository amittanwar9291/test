listener "tcp" {
  address       = "0.0.0.0:8200"
  tls_disable = 1
  //tls_cert_file = "/vault-config/tls/vault_cert.crt"
  //tls_key_file  = "/vault-config/tls/vault_key.key"
}

// Filesystem storage
storage "file" {
  path = "/vault-storage"
}

//storage "raft" {
//  path    = "/data/vault-raft"
//  node_id = "node1"
//}

ui = true
api_addr = "http://127.0.0.1:8200"
cluster_addr = "http://127.0.0.1:8201"
	
