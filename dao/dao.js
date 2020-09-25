const neo4j = require('neo4j-driver');

const driver = neo4j.driver("bolt://localhost",neo4j.auth.basic("neo4j"));

const session = driver.session();

const cypher = "MATCH (p:Users) RETURN p";

exports.fetchUsers = () =>{
   
    return session.run(cypher)
}