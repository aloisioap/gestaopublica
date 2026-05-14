"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface StatItem {
  label: string;
  value: string | number;
  color?: string;
}

interface CascadeCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  stats?: StatItem[];
  icon?: ReactNode;
  href: string;
  color: string;
  badge?: string;
  index?: number;
}

export function CascadeCard({
  title,
  subtitle,
  description,
  stats,
  icon,
  href,
  color,
  badge,
  index = 0,
}: CascadeCardProps) {
  return (
    <Link
      href={href}
      className="block group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1 h-full">
        {/* Header */}
        <div
          className="relative h-32 px-5 flex items-center justify-between overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${color} 0%, ${color}bb 100%)`,
          }}
        >
          {/* decorative circles */}
          <div
            className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-20"
            style={{ backgroundColor: "white" }}
          />
          <div
            className="absolute -right-2 -bottom-8 w-16 h-16 rounded-full opacity-10"
            style={{ backgroundColor: "white" }}
          />
          <div className="relative flex-1">
            {subtitle && (
              <p className="text-white/70 text-[10px] uppercase font-bold tracking-wider mb-1">
                {subtitle}
              </p>
            )}
            <p className="text-white font-bold text-lg leading-tight line-clamp-2">{title}</p>
            {badge && (
              <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-semibold">
                {badge}
              </span>
            )}
          </div>
          {icon && (
            <div className="relative ml-4 p-3 rounded-2xl bg-white/20 text-white shrink-0 group-hover:bg-white/30 transition-colors">
              {icon}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1">
          {description && (
            <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">{description}</p>
          )}

          {stats && stats.length > 0 && (
            <div
              className="grid gap-2 mb-4"
              style={{ gridTemplateColumns: `repeat(${Math.min(stats.length, 3)}, 1fr)` }}
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-xl p-3 border border-slate-100 text-center"
                >
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {stat.label}
                  </p>
                  <p
                    className="text-base font-bold leading-tight"
                    style={{ color: stat.color || color }}
                  >
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex-1" />

          {/* Action button */}
          <div
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-white text-sm font-semibold mt-4 group-hover:opacity-90 transition-all"
            style={{ backgroundColor: color }}
          >
            Acessar
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
