DATABASE QUERIES

Importare il DB allegato tramite phpMyAdmin ed eseguire le seguenti queries:
- Selezionare tutti gli uffici, ordinati per nazione
    SELECT * 
    FROM `offices`
    ORDER BY `country`;
- Selezionare tutti gli uffici, ordinati per nazione e per città
    SELECT * 
    FROM `offices`
    ORDER BY `country`, `city`;
- Selezionare tutti gli impiegati, ordinati per titolo e per nome
    SELECT * 
    FROM `employees`
    ORDER BY `title`, `name`;
- Contare quanti impiegati condividono lo stesso ufficio
    SELECT COUNT(`id`) AS 'employees_qty', `office_id` 
    FROM `employees`
    GROUP BY `office_id`;
- Contare quanti impiegati condividono la stessa estensione
    SELECT COUNT(`id`) AS 'employees_qty', `extension` 
    FROM `employees`
    GROUP BY `extension`;
- Selezionare tutti i prodotti con quantità inferiore a 500 pezzi
    SELECT * 
    FROM `products`
    WHERE `qty` < 500;
- Selezionare tutti i prodotti Ford
    SELECT * 
    FROM `products`
    WHERE `name` LIKE '%ford%';
- Contare quanti prodotti Ford hanno quantità inferiore a 500 pezzi
    SELECT * 
    FROM `products`
    WHERE `name` LIKE '%ford%'
    AND `qty` < 500;
- Per ogni impiegato mostrare il suo diretto superiore (tip: usa un alias quando fai la join)
    SELECT a.id, a.lastname, a.name, a.title, 
    b.id AS employees_boss_id, b.lastname, b.name, b.title
    FROM `employees` AS a
    LEFT JOIN `employees` AS b
    ON a.employee_id = b.id;
- Per ogni impiegato mostrare il numero di telefono completo (numero ufficio + estensione)
    SELECT employees.id, employees.lastname, employees.name, employees.email, 
    Concat(`offices`.`phone`, INSERT(`employees`.`extension`, 1,1, " ")) AS employees_number
    FROM `employees`
    JOIN `offices`
    ON `employees`.`office_id` = `offices`.`id`;
- Selezionare i 10 ordini più recenti
    SELECT * 
    FROM `orders`
    ORDER BY `date` DESC
    LIMIT 10;
- Per ogni cliente mostrare il numero di ordini che ha fatto (tip: attenzione al tipo di JOIN e al campo usato per il COUNT)
    SELECT `customers`.`id`, `customers`.`name`, `customers`.`lastname`,
    COUNT(`orders`.`id`) AS order_qty
    FROM `customers`
    LEFT JOIN `orders`
    ON `customers`.`id` = `orders`.`customer_id`
    GROUP BY `customers`.`id`;
- Per ogni cliente mostrare la quantità di prodotti acquistati in ogni ordine, mostrando anche il nome del prodotto (tip: attenzione al tipo di JOIN)
    - Ordinare per quantità
    - Ordinare per nome o ID cliente
    SELECT `customers`.`id`, `customers`.`name`, `customers`.`lastname`,
    `orders`.`id` AS order_id,
    SUM(`orderdetails`.`quantity`) AS qty,
    GROUP_CONCAT(`products`.`name`) AS products_name
    FROM `customers`
    JOIN `orders`
    ON `customers`.`id` = `orders`.`customer_id`
    JOIN `orderdetails`
    ON `orders`.`id`=`orderdetails`.`order_id`
    JOIN `products`
    ON `products`.`id`=`orderdetails`.`product_id`
    GROUP BY `orders`.`id`
    ORDER BY `customers`.`id`, `orders`.`id` DESC;
- Per ogni cliente mostrare il totale speso sulla piattaforma, il costo sostenuto per ogni prodotto ed il guadagno netto per la piattaforma (tip: la colonna MSRP indica il prezzo a cui è stato venduto il singolo prodotto)
    SELECT `customers`.`id`, `customers`.`name`,`customers`.`lastname`,
    SUM(`orderdetails`.`quantity`*`products`.`buy_price`) AS total_buy_price,
    SUM(`orderdetails`.`quantity`*`products`.`MSRP`) AS total_sold_price,
    SUM(`orderdetails`.`quantity`*`products`.`MSRP`)-SUM(`orderdetails`.`quantity`*`products`.`buy_price`) AS total_profit
    FROM `customers`
    JOIN `orders`
    ON `customers`.`id`=`orders`.`customer_id`
    JOIN `orderdetails`
    ON `orderdetails`.`order_id`=`orders`.`id`
    JOIN `products`
    ON `products`.`id`=`orderdetails`.`product_id`
    GROUP BY `customers`.`id`, `orders`.`id`
    ORDER BY `customers`.`id`;
