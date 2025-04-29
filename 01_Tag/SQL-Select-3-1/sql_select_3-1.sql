-- Tabelle Customers:
-- 1. Zeige alle **Länder** an, die **mehr als fünf Kunden** haben
SELECT country, COUNT(*) AS KundenAnzahl FROM Customers GROUP BY Country HAVING COUNT(*) > 5;

-- Tabelle Orders:

-- 1. Zeige alle **Bestellungen** im **August 1996** an
SELECT * FROM Orders WHERE OrderDate LIKE '8/%/1996';
SELECT * FROM Orders WHERE MONTH(OrderDate) = 8 AND YEAR(OrderDate) = 1996;

-- 2. Zeige alle CustomerIds, die **mehr als eine Bestellung** getätigt haben
SELECT customerID, COUNT(*) AS MehrfachKunde FROM Orders GROUP BY CustomerID HAVING COUNT(*)>1;

-- 3. Zeige die **CustomerId** mit den **meisten Bestellungen** an
SELECT CustomerID, COUNT(*) AS AnzahlBestellungen FROM Orders GROUP BY CustomerID ORDER BY COUNT(*) DESC LIMIT 1;

-- Bonus: Zeige direkt den Kundennamen an (nutze JOIN um zwei Tabellenabfragen zu verbinden)
??

-- Tabelle Products

-- 1. Zeige alle Produkte an, die von der Firma “**Heli Süßwaren GmbH & Co. KG** ” **geliefert** werden
    SELECT Products.ProductName, Suppliers.SupplierName FROM Products JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;
    und da fehlt noch was....

-- 2. Zeige den **Durchschnittspreis** aller Produkte an
SELECT AVG(Price) FROM Products;

-- 3. Zeige den **Höchstpreis** aller Produkte an
SELECT MAX(Price) FROM Products;

-- Tabelle Suppliers

-- 1. Zeige alle **Lieferanten** an, deren **Telefonnummer** **keine Klammern** () enthält
SELECT SupplierName, Phone FROM Suppliers WHERE Phone NOT LIKE '%(%)%';

-- 2. Liste die **Länder** mit der **Anzahl der Lieferanten** auf, **sortiert** nach der **Anzahl** der Lieferanten in **absteigender** Reihenfolge und bei gleicher Anzahl von Lieferanten alphabetisch nach Ländernamen.
SELECT Country, COUNT(*) AS SupplierCount FROM Suppliers WHERE Country IS NOT NULL GROUP BY Country ORDER BY COUNT(*) DESC, Country ASC;