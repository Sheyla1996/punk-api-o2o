export interface Unity {
    value?: number;
    unit?: string;
}

export interface MashTemp {
    temp?: Unity;
    duration?: number;
}

export interface Fermentation {
    temp?: Unity;
}

export interface Malt {
    name?: string;
    amount?: Unity;
}

export interface Hop {
    name?: string;
    amount?: Unity;
    add?: string;
    attribute?: string;
}

export interface Ingredients {
    malt?: Malt[];
    hops?: Hop[];
    yeast?: string;
}

export interface Method {
    mash_temp?: MashTemp[];
    fermentation?: Fermentation;
    twist?: string | null;
}

export interface Beer {
    id?: number;
    name?: string;
    tagline?: string;
    first_brewed?: string;
    description?: string;
    image_url?: string;
    abv?: number;
    ibu?: number;
    target_fg?: number;
    target_og?: number;
    ebc?: number;
    srm?: number;
    ph?: number;
    attenuation_level?: number;
    volume?: Unity;
    boil_volume?: Unity;
    method?: Method;
    ingredients?: Ingredients;
    food_pairing?: string[];
    brewers_tips?: string;
    contributed_by?: string;
}

