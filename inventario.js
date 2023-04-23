class Inventario {
    constructor(){
        this.producto = [{id:2, nombre:'Juana'}];
    }

    addProduct(newProduct){ //Post
        let id = this.getId();
        newProduct.id = id;

        this.producto = [...this.producto, newProduct];

    }

    search(id){ 
        return this.producto.find((encontrado) => encontrado.id == id);

    }


    listProducts(){ //Get
        return this.producto;
    }

    getId(){
        let id;
        this.producto.forEach(product => {
            id = product.id;
            
        });
        id++;
        return id;
    }


}

const claseInventario = new Inventario();

export {claseInventario};

