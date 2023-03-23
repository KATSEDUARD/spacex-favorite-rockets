const addToFavorites = (isFavorite: boolean, id: string, flights: any) => {
    const currentFlights = flights();
    flights(
        isFavorite ? currentFlights.filter((flightId: string) => flightId !== id) : [...currentFlights, id]
    );
};

export const uiAction = {
    addToFavorites
};