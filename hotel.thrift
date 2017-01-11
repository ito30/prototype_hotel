struct Hotel {
	1: string province_name,
	2: string kecamatan_name,
	3: string kelurahan_name,
	4: string business_uri,
	5: string photo_primary,
	6: byte star_rating,
	7: string id,
	8: i16 room_available,
	9: double latitude,
	10: double longitude,
	11: i16 room_max_occupancies,
	12: double rating,
	13: string room_facility_name,
	14: double oldprice,
	15: string address,
	16: string wifi,
	17: string promo_name,
	18: double price,
	19: double total_price,
	20: string regional,
	21: string name,
	22: string hotel_id
}

struct SearchResult {
	1: required list<Hotel> results;
}