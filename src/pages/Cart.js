import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"

const Cart = () => {
    return(
        <Container>
        <div>
            <div>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
                    <div>
                        <div>
                            <img src='./public/M5.png' />
                        </div>
                        <div>
                            <p>Title</p>
                        </div>
                        <div>
                            <p>$ 2000</p>
                        </div>
                        <div>
                            <p>1</p>
                        </div>
                        <div>
                            <button>
                                <Delete />
                            </button>
                        </div>
                    </div>
            <div>
                <Button>Continuar comprando</Button>
                <div>
                    <div>
                        <p>Subtotal</p>
                        <span>$ 2000</span>
                    </div>
                    <div>
                        <p>Total</p>
                        <span>$ 2000</span>
                    </div>
                    <Button>Completar Compra</Button> 
                </div>
            </div>
        </div>
    </Container>
    )

}

export default Cart