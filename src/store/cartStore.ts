export type CartItem = {
    id: string;
    product: any;
    quantity: number;
}

let cart: CartItem[] = [];
let listeners: Array<() => void> = [];

const loadCart = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('luxe-cart');
        if (saved) {
            try { 
                cart = JSON.parse(saved); 
            } catch(e){}
        }
    }
}
loadCart();

const emitChange = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('luxe-cart', JSON.stringify(cart));
    }
    for (let listener of listeners) {
        listener();
    }
}

export const cartStore = {
    addItem: (product: any) => {
        const productId = product.id || product.slug;
        const current = cart.find(i => i.id === productId);
        if (current) {
            // Immutable update to trigger React hooks properly
            cart = cart.map(i => i.id === productId ? { ...i, quantity: i.quantity + 1 } : i)
        } else {
            cart = [...cart, { id: productId, product, quantity: 1 }];
        }
        emitChange();
    },
    removeItem: (id: string) => {
        cart = cart.filter(i => i.id !== id);
        emitChange();
    },
    updateQuantity: (id: string, qty: number) => {
        cart = cart.map(i => i.id === id ? { ...i, quantity: Math.max(1, qty) } : i);
        emitChange();
    },
    clearCart: () => {
        cart = [];
        emitChange();
    },
    subscribe: (listener: () => void) => {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    },
    getSnapshot: () => cart
}
