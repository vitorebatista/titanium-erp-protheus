exports.definition = {

	// definição da estrutura da collection
	config: {
		"columns": {
			"T9_FILIAL":"text",
			"T9_CODBEM":"text",
			"T9_NOME":"text"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "ST9"
		}
	},

	// função para deletar todos os itens da collection
	extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
 
            deleteAll : function() {
 
                var collection = this;
 
                var sql = "DELETE FROM " + collection.config.adapter.collection_name;
                db = Ti.Database.open(collection.config.adapter.db_name);
                db.execute(sql);
                db.close();
 
                collection.trigger('sync');

            },

        });
        // end extend
        return Collection;
    }
    
};