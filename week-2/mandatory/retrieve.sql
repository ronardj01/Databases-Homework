-- Retrieve all the customers names and addresses who lives in United States
select name, address from customers c where country = 'United States';

-- Retrieve all the customers ordered by ascending name
select * from customers c order by name asc;

-- Retrieve all the products which cost more than 100
select * from products p where unit_price > 100;

-- Retrieve all the products whose name contains the word socks
select * from products p where product_name like '%socks%';

-- Retrieve the 5 most expensive products
select * from products p order by unit_price desc limit 5;

-- Retrieve all the products with their corresponding suppliers. The result should only contain the columns product_name, unit_price and supplier_name
select p.product_name, p.unit_price, s.supplier_name from products p 
inner join suppliers s on p.supplier_id = s.id;

-- Retrieve all the products sold by suppliers based in the United Kingdom. The result should only contain the columns product_name and supplier_name
select p.product_name, s.supplier_name from products p 
inner join suppliers s on p.supplier_id = s.id
where s.country = 'United Kingdom';

-- Retrieve all orders from customer ID 1
select * from orders o 
inner join customers c on o.customer_id = c.id
where c.id = 1;

-- Retrieve all orders from customer named Hope Crosby
select * from orders o 
inner join customers c on o.customer_id = c.id
where c.name = 'Hope Crosby';

-- Retrieve all the products in the order ORD006. The result should only contain the columns product_name, unit_price and quantity
select p.product_name, p.unit_price, oi.quantity from products p 
inner join order_items oi on oi.product_id = p.id 
inner join orders o on oi.order_id = o.id 
where o.order_reference = 'ORD006';

-- Retrieve all the products with their supplier for all orders of all customers. The result should only contain the columns name 
--(from customer), order_reference order_date, product_name, supplier_name and quantity
select c.name, o.order_reference, o.order_date, p.product_name, s.supplier_name, oi.quantity from products p 
inner join suppliers s on p.supplier_id = s.id 
inner join order_items oi on oi.product_id = p.id
inner join orders o on oi.order_id = o.id 
inner join customers c on o.customer_id = c.id;

-- Retrieve the names of all customers who bought a product from a supplier from China
select c.name from customers c
inner join orders o on o.customer_id = c.id 
inner join order_items oi on oi.order_id = o.id 
inner join products p on oi.product_id = p.id 
inner join suppliers s on p.supplier_id = s.id
where s.country = 'China';

 