//CASOS DE USO DOS ITENS

// => CRIAR ITEM COM SUBTOTAL CERTO
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    };
} 

export default createItem;