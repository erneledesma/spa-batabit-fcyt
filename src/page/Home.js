import getData from "../utils/getData";

const Home =  async () => {

    const coin = await getData();
    console.log(coin);

    const view = `
    <section class="main-exchange-container">
    <div class="backgroudImg"></div>
    <div class="main-exchange-container--title">
        <h2>Visibilizamos todas las tasas de cambio.</h2>
        <p>Traemos información en tiempo real de las casas de cambio y las monedas más importantes del mundo.</p>
    </div>
    <section class="main-tables-container">
        <!-- table currency -->
        <div class="main-currency-table main-table">
            <p class="currency-table--title main-table--title">Monedas</p>
            <div class="currency-table--table main-table--table">
                <div class="table-right">Bitcoin</div>
                <div class="table-left">Us$ ${coin.data[0].price_usd} <span class="up"></span></div>
                <div class="table-right">Ethereum</div>
                <div class="table-left">Us$ ${coin.data[1].price_usd} <span class="down"></span></div>
                <div class="table-right">Rippe</div>
                <div class="table-left">$ 2.15 <span class="up"></span></div>
                <div class="table-right">Stellar</div>
                <div class="table-left">$ 4.96 <span class="up"></span></div>
            </div>
            <p class="currency-table--date main-table--date"> <b>Actualizado:</b> 19 Julio 23:45</p>
            <span  style="display: none;" class="main-table--arrow right"></span>
        </div>

        
        <!-- table commissions -->

        <div class="main-commission-table main-table">
            <p class="commission-table--title main-table--title">Comisiones</p>
            <div class="commission-table--table main-table--table">
                <div class="table-right">Bitrade</div>
                <div class="table-left">$ 12.96 </div>
                <div class="table-right">Bitpreco</div>
                <div class="table-left">$ 13.07 </div>
                <div class="table-right">Novadax</div>
                <div class="table-left">$ 13.15 </div>
                <div class="table-right">Coinext</div>
                <div class="table-left">$ 14.96 </div>
            </div>
            <p class="commission-table--date main-table--date"> <b>Actualizado:</b> 19 Julio 23:48</p>
            <span style="display: none;"  class="main-table--arrow left"></span>
        </div>
    </section>
</section>

<section class="main-product-detail">
    <span class="product-detail--batata-logo"></span>
    <div class="product-detail--title">
        <h2>Creamos un producto sin comparación.</h2>
        <p>Confiable y diseñado para su uso diario.</p>
    </div>
    <section class="product-cards--container">
        <article  class="product-detail--card">
            <span class="clock icon-card"></span>
            <p class="product--card-title">Tiempo real</p>
            <p class="product-card--body">Nuestro API toma información minuto a minuto sobre las tasas que más determinan el comportamiento.</p>
        </article>
        <article  class="product-detail--card">
            <span class="eye icon-card"></span>
            <p class="product--card-title">No hay tasas escondidas</p>
            <p class="product-card--body">Ni en la compra o al momento de exit, Batabit siempre te muestra el costo real de lo que estás adquiriendo.</p>
        </article>
        <article  class="product-detail--card">
            <span class="dollar-sign icon-card"></span>
            <p class="product--card-title">Compara monedas</p>
            <p class="product-card--body">No más rumores, con Babtabit sabrás el valor real de cada moneda en el mercado actual.</p>
        </article>
        <article  class="product-detail--card">
            <span class="check-circle icon-card"></span>
            <p class="product--card-title">Información confiable</p>
            <p class="product-card--body">Nuestras fuentes están 100% verificadas y continuamos auditando su contenido mientras se actualizan.</p>
        </article>
        
    </section>
</section>

<section class="bitcoin-img-container">
    <h2>Conócelo hoy.</h2>
</section>

<section id="plans" class="main-plans-container">
    <div class="plans--title">
        <h2>Escoge el plan que mejor se ajuste a ti.</h2>
        <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
    </div>
    <section class="plans-container--slider">
        <article class="plans-container-card">
            <div class="plan-info-container">
                <h3 class="plan-card--title">Pago Anual</h3>
                <p class="plan-card--price"><span>$</span>99</p>
                <p class="plan-card--saving">*Ahorras $129 comparado al plan mensual.</p>
                <button class="plan-card--ca">Escoger este <span></span></button>
            </div>
        </article>
        <article class="plans-container-card">
            <p class="recomendado">Recomendado</p>  <!-- solo lo tiene una -->
            <div class="plan-info-container">
                <h3 class="plan-card--title">Pago Anual</h3>
                <p class="plan-card--price"><span>$</span>99</p>
                <p class="plan-card--saving">*Ahorras $129 comparado al plan mensual.</p>
                <button class="plan-card--ca">Escoger este <span></span></button>
            </div>
        </article>
        <article class="plans-container-card">
            <div class="plan-info-container">
                <h3 class="plan-card--title">Pago Anual</h3>
                <p class="plan-card--price"><span>$</span>99</p>
                <p class="plan-card--saving">*Ahorras $129 comparado al plan mensual.</p>
                <button class="plan-card--ca">Escoger este <span></span></button>
            </div>
        </article>
    </section>
</section>
    `;
    return view;
}

export default Home;