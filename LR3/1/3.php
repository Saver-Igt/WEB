<?php
	$news = array( 
					array( "Title" => "Заголовок", 
							"Desc" => "Описание",
							"imgURL" => "Ссылка" 
					),
					array( "Title" => "Заголовок2", 
						"Desc" => "Описание2",
						"imgURL" => "Ссылка2"
					),
					array( "Title" => "Заголовок3", 
						"Desc" => "Описание3",
						"imgURL" => "Ссылка3" 
					),
					array( "Title" => "Заголовок4", 
						"Desc" => "Описание4",
						"imgURL" => "Ссылка4" 
					),
					array( "Title" => "Заголовок5", 
						"Desc" => "Описание5",
						"imgURL" => "Ссылка5" 
					),
					array( "Title" => "Заголовок6", 
						"Desc" => "Описание6",
						"imgURL" => "Ссылка6" 
					),
					array( "Title" => "Заголовок7", 
						"Desc" => "Описание7",
						"imgURL" => "Ссылка7" 
					),
					array( "Title" => "Заголовок8", 
						"Desc" => "Описание8",
						"imgURL" => "Ссылка8" 
					),
					array( "Title" => "Заголовок9", 
						"Desc" => "Описание9",
						"imgURL" => "Ссылка9" 
					),
					array( "Title" => "Заголовок10", 
						"Desc" => "Описание10",
						"imgURL" => "Ссылка10" 
					),
					array( "Title" => "Заголовок11", 
						"Desc" => "Описание11",
						"imgURL" => "Ссылка11" 
					),
					array( "Title" => "Заголовок12", 
						"Desc" => "Описание12",
						"imgURL" => "Ссылка12" 
					),
					array( "Title" => "Заголовок13", 
						"Desc" => "Описание13",
						"imgURL" => "Ссылка13" 
					),
					array( "Title" => "Заголовок14", 
						"Desc" => "Описание14",
						"imgURL" => "Ссылка14" 
					),
					array( "Title" => "Заголовок15", 
						"Desc" => "Описание15",
						"imgURL" => "Ссылка15" 
					)
				);
	$amount = $_GET["kol"];
	$current = $_GET["tek"];
	header('Content-Type: application/json');
	$result = array_slice($news, $current, $amount);
	echo json_encode($result);
?>