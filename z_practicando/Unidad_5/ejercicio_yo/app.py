from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Base de datos simulada para almacenar las órdenes de compra
ordenes_de_compra = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/v1/purchase-orders/', methods=['POST', 'GET', 'DELETE'])
def purchase_orders():
    if request.method == 'GET':
        return jsonify(ordenes_de_compra)
    elif request.method == 'POST':
        data = request.get_json()
        orden = {
            'proveedor': data['proveedor'],
            'articulo': data['articulo'],
            'cantidad': data['cantidad']
        }
        ordenes_de_compra.append(orden)
        return jsonify({'message': 'Orden de compra creada'})
    elif request.method == 'DELETE':
        data = request.get_json()
        ordenes_de_compra.clear()
        return jsonify({'message': 'Órdenes de compra eliminadas'})

if __name__ == '__main__':
    app.run(debug=True)
