'use strict';

class Collection {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  create(json) {
    return this.model.create(json);
  }

  read(id, options = {}) {
    let modelParams = {...options};
    if(id){
      modelParams.where = { id: id };
      return this.model.findOne(modelParams);
    } else {
      return this.model.findAll();
    }
  }

  async update(id, json) {
    let row = await this.model.findOne({
      where: {
        id: id,
      },
    });
    
    let updatedRow = await row.update(json);
    return updatedRow;
  }

  delete(id) {
    return this.model.destroy({
      where: {
        id: id,
      },
    });
  }
  createAssociation(type, model, options) {
    try {
      this.model[type](model, options);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Collection;