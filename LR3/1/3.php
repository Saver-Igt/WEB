<?php
	$news = array( 
					array( "Title" => "Заголовок", 
							"Desc" => "Описание",
							"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок2", 
						"Desc" => "Описание2",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp"
					),
					array( "Title" => "Заголовок3", 
						"Desc" => "Описание3",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок4", 
						"Desc" => "Описание4",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок5", 
						"Desc" => "Описание5",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок6", 
						"Desc" => "Описание6",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок7", 
						"Desc" => "Описание7",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок8", 
						"Desc" => "Описание8",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок9", 
						"Desc" => "Описание9",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок10", 
						"Desc" => "Описание10",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок11", 
						"Desc" => "Описание11",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок12", 
						"Desc" => "Описание12",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок13", 
						"Desc" => "Описание13",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок14", 
						"Desc" => "Описание14",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					),
					array( "Title" => "Заголовок15", 
						"Desc" => "Описание15",
						"imgURL" => "https://cdnn21.img.ria.ru/images/07e7/03/1b/1861056619_0:321:3071:2048_640x0_80_0_0_79a89887e8099f540f872ca286b0655c.jpg.webp" 
					)
				);
	$amount = $_GET["kol"];
	$current = $_GET["tek"];
	header('Content-Type: application/json');
	$result = array_slice($news, $current, $amount);
	echo json_encode($result);
?>