CREATE TABLE image_gallery (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(500) NOT NULL,
    "description" VARCHAR(200),
    "likes" INTEGER DEFAULT 0
);

INSERT INTO image_gallery (path, description)
VALUES ('images/alexg_houseofsugar.jpg', 'Alex G - House of Sugar'),
('images/gatecreeper_anunexpectedreality.jpg', 'Gatecreeper - An Unexpected Reality'),
('images/joydivision_unknownpleasures.jpg', 'Joy Division - Unknown Pleasures'),
('images/madvillain_madvillainy.jpg', 'Madvillain - Madvillainy'),
('images/mbv_loveless.jpg', 'My Bloody Valentine - Loveless'),
('images/aphextwin_saw.jpg', 'Aphex Twin - Selected Ambient Works 85-92');
