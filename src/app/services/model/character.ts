/**
 * CarsalesBFF
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Origin } from './origin';
import { Location } from './location';


export interface Character { 
    id?: number;
    name?: string | null;
    status?: string | null;
    species?: string | null;
    type?: string | null;
    gender?: string | null;
    origin?: Origin;
    location?: Location;
    image?: string | null;
    episode?: Array<string> | null;
    url?: string | null;
    created?: string;
}

